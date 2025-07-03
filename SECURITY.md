# Security Policy

## Supported Versions

| Version | Supported          | Security Fixes Only |
| ------- | ------------------ | ------------------- |
| Main    | ✔️ Current release | ✔️ Always secure    |

## Reporting a Vulnerability

If you discover a security vulnerability in this repository, please follow these steps:

1. **Confidential Reporting**

   * Email me directly at **[disaenz2@gmail.com](mailto:disaenz2@gmail.com)** (PGP key available on request).
   * Please include:
     * A clear description of the vulnerability.
     * Steps to reproduce or a proof-of-concept.
     * Any suggested mitigation or patch code.

2. **Acknowledgement**

   * You will receive an acknowledgement within 48 hours.
   * Public disclosure will occur only after a fix is available, or by mutual agreement.

## Security Practices

* **Dependencies**
  * Regularly updated via `npm audit` and GitHub Dependabot.

* **CI/CD Hardening**
  * Secrets are stored in GitHub Actions Secrets.
  * Infrastructure access is locked down by least-privilege IAM policies.

* **Static Analysis**
  * ESLint rules enforce code quality.

## Disclosures and Credits

* Security research and contributions are credited in the repository's **SECURITY** section of any releases.
* Thank you to all security researchers who help keep this project safe.