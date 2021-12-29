# Weeboo frontend tools
Script pomáhající tvořit hezčí produktové texty pomocí jednoduchých krátkých kódů pro každého, bez nutnosti znát programovací či kódovací jazyky.

Všechny funkce stačí zapsat do klasického editoru textu ve Vašem systému.

## Alerts (Oznamovac blok)
Alerty slouží k oznámení o chybě, informaci či celkovému zvýraznění určíté informace. 
Příklad užití:

> \[weeboo-alert;class\~primary;text\~Primární WeeBoo alert...\]

| Atribut | Values |
| ------ | ------ |
| class | primary / secondary / success / danger / warning / info / light / dark |
| headline | Pokud obsahuje, alert bude obsahovat nadpis. Hodnota je text nadpisu. |
| icon | Typ ikony se váže na název typ ze serveru https://fontawesome.com/ |
| text | Textový obsah alertu... |

---