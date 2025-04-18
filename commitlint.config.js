export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Nowa funkcjonalność
        "fix", // Naprawa błędu
        "docs", // Zmiany w dokumentacji
        "style", // Zmiany formatowania, średniki, etc.
        "refactor", // Refaktoryzacja kodu
        "perf", // Zmiany wydajnościowe
        "test", // Dodanie lub modyfikacja testów
        "chore", // Zmiany w build process lub narzędziach pomocniczych
        "ci", // Zmiany w konfiguracji CI
        "revert", // Przywrócenie poprzedniej wersji
      ],
    ],
    "type-case": [2, "always", "lower"],
    "type-empty": [2, "never"],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
  },
};
