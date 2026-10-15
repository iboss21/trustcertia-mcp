# Directory submission status

Prepared 2026-10-14. Not submitted or approved.

The publisher-maintained Claude marketplace package is separate from Anthropic's reviewed directory. The portable package uses public/no-auth tools by default. Private tools use personal bearer tokens, not OAuth.

OpenAI public submission requires the appropriate verified organization/developer identity, a registered remote connection, tool scanning and test cases, domain challenge where required, and listing/privacy/terms/support information. Current documentation says fixed API-key authentication is not supported in the submission portal's connection form. Implement and test OAuth before submitting private tools through that flow. Do not fabricate an app ID or approval.

For Claude's reviewed directory, test the connector in the target account, confirm current authentication requirements and submit the listing and test instructions through its portal.

Sources:

- https://developers.openai.com/plugins/build/plugins
- https://developers.openai.com/plugins/deploy/submission
- https://developers.openai.com/plugins/deploy/app-review
- https://claude.com/resources/articles/build-plugins-for-claude

No customer accounts, credentials, owner personal details or restricted evidence belong in review artifacts.
