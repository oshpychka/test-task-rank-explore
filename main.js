// Task #1 //

const text1 = `
    яблоки 5 штук
    бананы 10 штук
    помидоры 1 штука
    огурцы 0 штук
`;

// Regex #1 for Task #1

const regexp1 = /^(\D+?)\s(\d+)\s+штук[аи]?$/gm;

const text2 = text1.replace(regexp1, '$1;$2');

// Regex #2 for Task #1

const regexp2 = /^.+;[1-9]\d*$|^(.+);0$/gm;

// Result for Task #1

const result1 = text2.replace(regexp2, `$1`);
console.log(`Result for Task #1: ${result1}`);

// Task #2 //

const html = `
    <html>
        <body>
            <div class="main">
                <div class="block delete">удалить этот блок <div>X</div></div><div class="block">оставить этот блок <div>V</div></div>
                
                <div class="block delete">удалить этот блок</div>
                <div class="block">оставить этот блок</div>
                
                <div class="block delete">удалить <div>этот</div> блок </div><div class="block">оставить <div>этот</div> блок</div>
            </div>
        </body>
    </html>
`;

// Regex for Task 2

const regexp3 = /<div\s+class="block\s+delete">[\s\S]*?<\/div>/gi

// Result for Task 2

const result2 = html.replace(regexp3, '');
console.log(`Result for Task #2: ${result2}`);