# Övningar

## Komponenter

### Övning 1 - Komponentstruktur
1. Skapa ett nytt react-projekt
2. Titta på bilderna i mappen ```assets``` och fundera på vilka komponenter du ser. Vilka är de övergripande komponenterna för webbsidan som helhet, och vilka sub-komponenter finns eventuellt?
3. Skapa dina övergripande funktionella komponenter var för sig i egna filer, och läs in dem i ```App.jsx```.
4. Skapa dina eventuella sub-komponenter och importera dem in i lämplig huvudkomponent.
5. Försök styla så att dina versioner ser likadana ut som bilderna i ```assets```.

#### Tips!
Skapa INTE ett projekt per bild, utan skapa hellre en komponent per bild, där du då kan välja i ```App.jsx``` vilken av dina versioner du vill visa på skärmen. Exempelvis: ```<Desktop-1 />```.

#### Nästa steg
Stoppa in riktig data i dina komponenter. Fyll exempelvis listobjekt med riktiga länkar, stoppa in lorem ipsum-text i dina artiklar, återanvänd dina listobjekt inuti din footer etc. 

### Övning 2 - Info-rutan
Följ instruktionerna [på länken](https://gist.github.com/Santosnr6/c31dd18e991b670e35977e9f9ca7c15c).

## JSX
Återvänd till övningen 'Komponentstruktur' och försök implementera följande saker

### Övning 3 - Conditional Rendering
Använd dig av 'tenary operators' för att, beroende på variabler/data, rendera någonting på skärmen. Till exempel så kan du skapa en variabel i din Menu som kollar om användaren är inloggad eller inte ```let userLoggedIn = true```. Om användaren är inloggad så vill du i din meny visa ett ListItem med texten Logga Ut, och om användaren inte är inloggad så skall din ListItem istället visa texten Logga In.

Kom gärna på fler sätt att öva använda conditional rendering på. Till exempel skulle du kunna använda det till att slumpa fram vilka delar på ```About.jsx``` som skall renderas för övningen 'Info-rutan' 

### Övning 4 - Array.map()
Map-funktionen är väldigt vanlig i React. Skapa en array i din ````Menu.jsx``` innehållandes dina menyalternativ. Använd därefter map-funktionen för att iterera igenom att menyalternativ, och skapa dina MenuItems med hjälp av funktionen. 

Försök även hitta andra delar av det du gjort hittills där du skulle kunna använda dig av map().

Dokumentationen för Array.map() [hittar du här](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Landningssida

### Övning 5 - Återskapa en landningssida med hårdkodad data.
1. Leta reda på en landningssida någonstans på webben.
2. Analysera vilka övergripande komponenter som landningssidan består av.
3. Analysera även vilka sub-komponenter dina huvud-komponenter består utav.
4. Skapa dina komponenter och fyll dem med hårdkodad data, dvs. bilder, rubriker, artiklar, länkar osv.
5. Pussla ihop din kopia och styla den så likt orginalet som möjligt.

#### Tips!
Skapa en komponent i taget!
Börja exempelvis med en eventuell Header och styla den tills du blir nöjd. Skapa därefter Headerns sub-komponenter och styla dem tills du blir nöjd. Först därefter går du vidare till nästa komponent. Koda och styla uppifrån och ner.
Inledningsvis lägger vi all styling i ```index.css```.