# Ground truth hierarchy

Use this order when making technical security claims:

1. **Direct observation:** locally reproducible behavior with known scope, inputs and outputs.
2. **Primary artifacts:** specific source lines, configuration, tests and official specifications.
3. **Primary guidance:** [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/), [OWASP Top 10](https://owasp.org/www-project-top-ten/), [MITRE CWE](https://cwe.mitre.org/), [CVE](https://www.cve.org/), vendor advisories, and [PortSwigger Web Security Academy](https://portswigger.net/web-security).
4. **Secondary reports:** reputable write-ups with attributable reproduction details.
5. **Model inference:** useful to generate hypotheses, **never** a substitute for proof.

When sources conflict, explain uncertainty and why one has higher evidentiary value. A CVE or CWE classification alone does not show exploitability in a particular environment. Verify current versions, dates and advisories when timing matters.
