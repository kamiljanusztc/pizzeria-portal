# Dashboard

- '/'
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- '/tables'
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - kazda kolumna = 1 stolik
    - kazdy wiersz = 30 min
    - ma przypominć widok tygodnia w aklendarzu Google, gdzie w kolumnach zamianst dni są rózne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- '/tables/booking/:id'
  - zaawiera wszystie informacje dotyczące rezerwacji
  - umozliwia edycję i zapisanie zmian
- '/tables/booking/new'
  - analogicznie do powyzszej, bez początkowych informacji
- '/tables/events/:id'
  - analogicznie do powyzszej, bez początkowych informacji
- '/tables/events/new'
  - analogicznie do powyzszej, bez początkowych informacji

# Widok kelnera

- '/waiter'
  - tabela
    - w wierszach stoliki
    - w kolumnach rózne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwotę zamówienia
- '/waiter/order/:id'
  - jak powyzsza

# Widok kuchni

- '/kitchen'
  - wyświetla listę zamówień w kolejności ich złozenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dotyczące zamówionych dań
  - na liście musi być mozliwość oznaczenia zamówienia jako zrealizowane

