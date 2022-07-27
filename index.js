const { writeFile, readFile, mkdir, rmdir } = require('fs')


// Klasör Oluşturuldu
mkdir('Employees',{recursive: true}, (err) => {
    if(err) console.log(err)
    console.log('Klasör Oluşturuldu')
    }
)
// Veri Eklendii

writeFile('Employees/employees.json',
        '{"name": "Employeee 1 Name", "salary": 2000 }', (err) => {
            if(err) console.log(err)
            console.log("Veri Eklendii")
        }
    )
    
// Dosya Okundu

readFile('Employees/employees.json',
         'utf-8',
         (err, data) => {
            if(err) console.log(err)
            console.log(data)
            console.log("Dosya Okundu")
         }
        )

// Klasör Silindi

setTimeout(() => {rmdir('Employees', { recursive: true}, (err) => {
        if(err) console.log(err)
        console.log('Klasör Silindi)');
    })
}, 3800)