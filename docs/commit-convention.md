# Konwencja Commitów

Ten projekt używa [Conventional Commits](https://www.conventionalcommits.org/) do formatowania commitów.

## Format

```
<typ>(<zakres>): <opis>

[opcjonalne ciało]

[opcjonalne stopki]
```

## Typy

- `feat`: Nowa funkcjonalność
- `fix`: Naprawa błędu
- `docs`: Zmiany w dokumentacji
- `style`: Zmiany formatowania, średniki, etc.
- `refactor`: Refaktoryzacja kodu
- `perf`: Zmiany wydajnościowe
- `test`: Dodanie lub modyfikacja testów
- `chore`: Zmiany w build process lub narzędziach pomocniczych
- `ci`: Zmiany w konfiguracji CI
- `revert`: Przywrócenie poprzedniej wersji

## Przykłady

```
feat(auth): dodanie logowania przez Google

fix(api): naprawienie błędu w endpoincie /users

docs(readme): aktualizacja instrukcji instalacji

style(components): formatowanie kodu zgodnie z prettier

refactor(utils): przepisanie funkcji pomocniczych na TypeScript

test(api): dodanie testów dla endpointu /cards

chore(deps): aktualizacja zależności

ci(github): dodanie GitHub Actions
```

## Zasady

1. Commit MUSI zawierać typ
2. Commit MUSI zawierać zakres
3. Commit MUSI zawierać opis
4. Typ i zakres MUSZĄ być pisane małymi literami
5. Opis nie może kończyć się kropką
6. Maksymalna długość pierwszej linii to 72 znaki
