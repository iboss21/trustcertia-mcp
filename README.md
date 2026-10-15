# TrustCertia MCP

Publisher-maintained integrations for [TrustCertia](https://trustcertia.com). Application source and credentials are not included.

Remote Streamable HTTP endpoint: `https://trustcertia.com/mcp`.

## Claude Code

```text
/plugin marketplace add iboss21/trustcertia-mcp
/plugin install trustcertia@trustcertia
```

The default plugin connects public evidence tools. Private project tools require a token from dashboard **Settings → Agent & MCP access**, sent through the client's secure `Authorization: Bearer` request-header setting. Never paste credentials into prompts or committed files. Tokens expire in 90 days and can be revoked. They cannot administer accounts or billing.

## ChatGPT and Codex

The portable package is in `plugins/trustcertia`, with `plugin.json` and `mcp.json`. Default no-auth access covers public tools only. A registered OpenAI app ID and marketplace approval are not claimed. The current personal-token flow is not OAuth; review [submission status](docs/submission.md) before submitting private-tool access.

## Tools

Public: get_trust_record, get_community_signals, get_check_definitions, get_agent_guide, check_domain, get_badge_designs, get_disclosure_questions, get_certification_requirements, get_embed_code, verify_record.

Personal token: get_workspace, get_ownership_instructions, add_project, capture_project_preview, verify_project_ownership, scan_project, publish_project_certificate.

Scopes: projects:read, projects:write, certificates:write. Domain ownership, required checks, owner attestation and explicit publication approval remain required.

Run `node examples/check-domain.mjs example.com` with Node 20+. No dependencies required.

A website evidence certificate is not an ISO certificate, SOC 2 report or guarantee of safety. Demo records must not be used as real assurance.

[Docs](https://trustcertia.com/docs/mcp) · [Privacy](https://trustcertia.com/privacy) · [Terms](https://trustcertia.com/terms) · Support: info@trustcertia.com
