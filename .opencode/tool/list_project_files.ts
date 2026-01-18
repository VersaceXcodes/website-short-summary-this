import { tool } from "@opencode-ai/plugin"

export default tool({
  name: "list_project_files",
  description: "List all files in project storage. Returns array of file metadata including filename, size, content_type, and public URL if applicable. Use this to see what files have been uploaded.",
  parameters: {},
  execute: async () => {
    const response = await fetch("https://launchpulse.ai/api/storage/proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: "website-short-summary-this",
        token: "lp_websites_0b35c68f01524b5f",
        path: "list",
        params: {}
      })
    });
    const result = await response.json();
    return JSON.stringify(result, null, 2);
  }
});

