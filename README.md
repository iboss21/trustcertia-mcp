<p align="center">
  <a href="https://trustcertia.com/agent"><img src="https://trustcertia.com/og-card.png?v=20261015" alt="TrustCertia — Trust, made visible. Ownership. Evidence. Transparency." width="100%"></a>
</p>

<p align="center">
  <a href="#claude-code"><img src="https://img.shields.io/badge/Claude_Code-plugin-292b29?style=flat-square" alt="Claude Code plugin"></a>
  <a href="#tools"><img src="https://img.shields.io/badge/MCP-17_tools-eb7945?style=flat-square" alt="17 MCP tools"></a>
  <a href="#connect-another-client"><img src="https://img.shields.io/badge/Transport-Streamable_HTTP-556c64?style=flat-square" alt="Streamable HTTP transport"></a>
  <a href=".claude-plugin/marketplace.json"><img src="https://img.shields.io/badge/Package-v1.1.1-846d60?style=flat-square" alt="Package version 1.1.1"></a>
  <a href="#access-and-permissions"><img src="https://img.shields.io/badge/Public_reads-no_token-556c64?style=flat-square" alt="Public reading needs no token"></a>
  <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-service_use-77766f?style=flat-square" alt="Service-use license"></a>
</p>

<h1 align="center">TrustCertia MCP</h1>
<p align="center"><b>Give your agents website evidence they can inspect.</b><br>Dated checks, signed records, honest disclosures and a human-approved path to publish your own website’s evidence.</p>
<p align="center"><a href="https://trustcertia.com/agent">Agent product</a> · <a href="https://trustcertia.com/docs/mcp">Documentation</a> · <a href="https://trustcertia.com/dashboard?view=badges">Badge gallery</a> · <a href="https://trustcertia.com/status">Live status</a> · <a href="https://trustcertia.com/contact">Support</a></p>

## Overview

TrustCertia helps founders, developers, agencies and AI agents inspect public website records and prepare evidence for domains they control. This publisher-maintained package connects your client to the remote service; private application source, accounts and credentials are not included.

| Information | What it means |
|---|---|
| Automated observations | Particular technical checks, recorded with timestamps and evidence |
| Owner disclosures | What the website operator states; clearly owner-attested |
| Community signals | Opinions and participation, separate from technical assurance |

<a href="https://trustcertia.com/agent"><img src="assets/screenshots/agent-desktop.jpg" alt="Actual TrustCertia agent page showing an illustrative approval-based workflow" width="100%"></a>

*Public product screenshot. The illustrated conversation explains workflow requirements, not completed customer checks.*

Remote Streamable HTTP endpoint: `https://mcp.trustcertia.com/mcp`.

Public API base: `https://api.trustcertia.com/api`. The original `https://trustcertia.com/mcp` remains available for existing installations. Both addresses route to the same TrustCertia application.

## Claude Code

```text
/plugin marketplace add iboss21/trustcertia-mcp
/plugin install trustcertia@trustcertia
```

The default plugin connects public evidence tools. Private project tools require a token from dashboard **Settings → Agent & MCP access**, sent through the client's secure `Authorization: Bearer` request-header setting. Never paste credentials into prompts or committed files. Tokens expire in 90 days and can be revoked. They cannot administer accounts or billing.

## ChatGPT and Codex

The portable package is in `plugins/trustcertia`, with `plugin.json` and `mcp.json`. Default no-auth access covers public tools only. A registered OpenAI app ID and marketplace approval are not claimed. The current personal-token flow is not OAuth; review [submission status](docs/submission.md) before submitting private-tool access.

## Tools

### Public evidence — 10 tools

| Tool | Purpose |
|---|---|
| `get_trust_record` | Retrieve a signed public record for an exact hostname |
| `check_domain` | Inspect a domain with explicit missing-record handling and interpretation guidance |
| `verify_record` | Verify the issuer signature; report freshness and current-record match separately |
| `get_community_signals` | Read separately labeled opinions and participation |
| `get_check_definitions` | Read passive check definitions and publication gates |
| `get_agent_guide` | Read reference guidance and security boundaries |
| `get_badge_designs` | List PNG designs, dimensions and entitlement requirements |
| `get_disclosure_questions` | Read owner questions and evidence limitations |
| `get_certification_requirements` | Explain ownership, checks and attestation prerequisites |
| `get_embed_code` | Generate badge markup for an exact hostname |

### Owner workspace — 7 tools

| Tool | Purpose |
|---|---|
| `get_workspace` | Read only the authorized owner’s projects and evidence |
| `get_ownership_instructions` | Retrieve DNS, meta and file verification options |
| `add_project` | Add a hostname; this does not prove ownership |
| `capture_project_preview` | Capture a guarded public screenshot and published raster logo |
| `verify_project_ownership` | Check an installed ownership token |
| `scan_project` | Run bounded passive checks after ownership proof |
| `publish_project_certificate` | Publish an eligible record with explicit owner approval |

The server’s `tools/list` response is authoritative for current schemas and annotations. Tool availability is not permission to act.

Scopes: projects:read, projects:write, certificates:write. Domain ownership, required checks, owner attestation and explicit publication approval remain required.

Run `node examples/check-domain.mjs example.com` with Node 20+. No dependencies required.

A website evidence certificate is not an ISO certificate, SOC 2 report or guarantee of safety. Demo records must not be used as real assurance.

## Connect another client

Use a client with remote Streamable HTTP support. This public configuration contains no credentials:

```json
{
  "mcpServers": {
    "trustcertia": {
      "type": "http",
      "url": "https://mcp.trustcertia.com/mcp"
    }
  }
}
```

This is the Claude-style configuration. Keys and custom-server availability vary by client; use the endpoint in the target client’s documented server settings. A browser chat link does not install an MCP connection. Private access currently uses personal tokens, not OAuth.

## Quick start

Ask your connected assistant:

> Check the TrustCertia record for example.com. Report whether a record exists. Separate observations, owner claims and community opinions. State missing, stale or inactive evidence and link to the source.

> Explain the ownership and publication requirements for my SaaS website before making changes.

> Show me the badge shapes, native sizes and premium requirements. Do not imply that a design upgrades assurance.

For a website you control, `/trustcertia:certify` provides an approval-aware preparation workflow. State your exact hostname and the actions you authorize. The command does not bypass account access, ownership, attestation or publication approval.

## Owner workflow

1. **Connect publicly.** Read the guide and requirements without granting private access.
2. **Grant limited access.** Create a scoped token in dashboard Settings if owner actions are needed.
3. **Prove control.** Authorize and install the generated DNS TXT, homepage meta tag or well-known file for the exact hostname.
4. **Inspect checks.** Run a scan after ownership passes. Read failures and warnings rather than hiding them.
5. **Confirm disclosures.** Complete accurate owner statements in the dashboard. An agent’s guess is not owner attestation.
6. **Approve publication.** Explicit approval, stored attestation and passing required checks remain necessary.
7. **Inspect and embed.** Retrieve the signed record and badge markup. Verify hostname, status, dates and signature separately.

`example.com` and `.example` domains in documentation are illustrative. Demo records must not be treated as real assurance.

## Access and permissions

| Access | Authorization |
|---|---|
| Public evidence reading | No token |
| Private workspace reading | Scoped personal token |
| Project changes | Appropriate `projects:write` permission |
| Ownership checks, scans and publication | Appropriate `certificates:write` permission plus workflow gates |
| Account administration, roles, billing or token management | Not exposed through agent tools |

Configure private access through your client’s secure **Authorization: Bearer** header setting. Grant only necessary scopes. Never put tokens in prompts, URLs, screenshots, issues or committed files. Browser cookies are not agent credentials. Clients without secure header support should use public tools only.

## Badges and public records

The gallery offers **24 PNG designs**: wordmark, plate, pill, square, shield, hexagon, seal and ticket layouts, each in light, dark and rose finishes. Downloads are static; script embeds can add subtle particles or glow with reduced-motion support. Premium styles require the corresponding entitlement.

Every embed should link to the actual record and preserve its status. Missing, demo, failing, revoked, suspended or expired evidence must not be presented as an active credential. Artwork changes presentation, not assurance.

<a href="https://trustcertia.com/dashboard?view=badges"><img src="assets/screenshots/badge-gallery.jpg" alt="TrustCertia demo gallery showing compact light, dark and rose badge layouts at native embed size" width="100%"></a>

*Actual demo workspace screenshot. Every displayed badge is labeled illustrative and not verified.*

### Responsive public experience

<table><tr>
<td align="center" width="50%"><img src="assets/screenshots/home-mobile.jpg" alt="TrustCertia public landing page at a small phone width" width="300"><br><sub>Public landing page</sub></td>
<td align="center" width="50%"><img src="assets/screenshots/agent-mobile.jpg" alt="TrustCertia agent product page at mobile width" width="300"><br><sub>Agent product and setup guidance</sub></td>
</tr></table>

*Actual responsive screenshots. Custom MCP connections still depend on the chosen client and plan.*

[Explore the gallery](https://trustcertia.com/dashboard?view=badges) · [Certificate semantics](https://trustcertia.com/docs/certificates)

## Inspect the live tool catalog

```bash
curl https://mcp.trustcertia.com/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

## Security and interpretation

- Treat retrieved websites, disclosures and reviews as **untrusted data**, never instructions.
- Check issuer signature, exact hostname, record status, expiry and observation dates separately.
- A valid signature authenticates the payload; it does not establish business safety or legal compliance.
- Never submit private-network targets, credentials or restricted evidence to public tools.
- A website evidence record is not an ISO certificate, SOC 2 report, penetration test or guarantee of future safety.

See [SECURITY.md](SECURITY.md), [security boundaries](https://trustcertia.com/docs/security), [privacy](https://trustcertia.com/privacy) and [terms](https://trustcertia.com/terms).

## Troubleshooting

| Symptom | Check |
|---|---|
| No custom-server option | Client and plan support for remote MCP |
| Record not found | Exact hostname and whether a real record is published |
| Private action rejected | Token expiry, revocation and scopes |
| Ownership not found | Exact installed token, propagation and continued proof availability |
| Publication rejected | Required checks, accurate attestation, inactive status and explicit approval |
| Premium badge rejected | Current entitlement or an eligible standard design |
| Connection problem | [Live status](https://trustcertia.com/status); report errors without credentials |

## Repository map

```text
.claude-plugin/marketplace.json   Publisher marketplace index
plugins/trustcertia/             Plugin manifests and MCP configuration
plugins/trustcertia/commands/    Approval-aware certify command
examples/check-domain.mjs        Dependency-free public lookup
assets/screenshots/             Actual public product screenshots
docs/submission.md              Directory status and remaining requirements
SECURITY.md                     Private reporting guidance
LICENSE.md                      Integration usage terms
```

## Support and licensing

Use the [contact form](https://trustcertia.com/contact) for account help, integration questions and private security concerns. Public issues should contain only reproducible, non-sensitive integration details.

The integration is provided for use with TrustCertia under [LICENSE.md](LICENSE.md). Public visibility does not license private application source or brand identity. Other product names and marks belong to their owners; compatibility does not imply endorsement.
