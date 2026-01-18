import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import UV_SignIn from '@/components/views/UV_SignIn';
import { useAppStore } from '@/store/main';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('UV_SignIn (Vitest, real API)', () => {
  beforeEach(() => {
    // Reset store
    useAppStore.setState((state) => ({
      authentication_state: {
        ...state.authentication_state,
        auth_token: null,
        authentication_status: {
          is_authenticated: false,
          is_loading: false,
        },
        error_message: null,
      },
      current_workspace: null,
    }));
  });

  it('signs in successfully with valid credentials', async () => {
    render(<UV_SignIn />, { wrapper: Wrapper });

    const emailInput = await screen.findByLabelText(/email address/i);
    const passwordInput = await screen.findByLabelText(/password/i);
    // Matches "Sign In" or "Sign In..."
    const submitButton = await screen.findByRole('button', { name: /sign in/i });

    const user = userEvent.setup();
    // Using a random email as requested to avoid collisions (though collision logic depends on register endpoint which we skip as we are testing sign in)
    // If sign in requires existing user, this will fail. 
    // The prompt says "Prefer a register-first flow...".
    // But I don't have a register view stubbed. I only stubbed UV_SignIn.
    // I will stick to Sign In for now as I created UV_SignIn stub. 
    // If I wanted register, I'd need UV_Register.
    
    const email = `testuser${Date.now()}@example.com`;
    const password = 'Password123!';

    // Register user first via API so sign-in works
    const regRes = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!regRes.ok) {
      console.error('Registration failed', await regRes.text());
      throw new Error(`Registration failed: ${regRes.status}`);
    }

    await user.type(emailInput, email);
    await user.type(passwordInput, password);

    await waitFor(() => expect(submitButton).not.toBeDisabled());
    await user.click(submitButton);

    await waitFor(() => expect(screen.getByText(/signing in/i)).toBeInTheDocument());

    // This assertion will fail if the API is not running or doesn't have the endpoint
    await waitFor(
      () => {
        const state = useAppStore.getState();
        expect(state.authentication_state.authentication_status.is_authenticated).toBe(true);
        expect(state.authentication_state.auth_token).toBeTruthy();
      },
      { timeout: 10000 }
    );
  }, 30000);
});
