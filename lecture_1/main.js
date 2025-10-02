// 1)
    let fullName = "Lika Mamaladze";
    const names = fullName.split(" ");
    const lastName = names[1];
    const initials = `${fullName[0]}.${lastName[0]}.`;
    console.log(initials);

// 2) 
    let email = " EXAMPLE@MAIL.COM ";
    const cleaned = email.trim().toLowerCase();
    console.log(cleaned);
    console.log(cleaned.includes("@"));

// 3) 
    let str = "luka";
    const lastLetter = str[str.length - 1].toUpperCase();
    console.log(lastLetter);

// 4)
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FooBar");
        } else if(i % 3 === 0 ) {
            console.log("Foo");
        } else if(i % 5 === 0) {
            console.log("Bar");
        }  else {
            console.log(i);
        }
    }

// 5)
    let text = "JS is stupid but sometimes cool"
    console.log(text.replace("stupid", "s****d"));


// -თეორია-
// 1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
    // var, 
    // let, 
    // const

// 2)რამდენი ტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
    //  - Number
    //  - String
    //  - Boolean
    //  - Object
    //  - Undefined
    //  - Null

// 3)რა მოვალეობა აქვს სკოუპის მეგობარ left hand side search - ს და right side search - ს.(პასუხი თეორიულად გაეცი)
    // Left hand side search - ხდება მაშინ როცა ვქმნით ახალ ცვლადს და ვანიჭებთ მას მნიშვნელობას.
    // Right side search - ხდება მაშინ როცა ვკითხულობთ არსებული ცვლადის მნიშვნელობას.

// 4) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
    // split()

// 5) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
    // სტრინგი პრიმიტიული ტიპია

// 6)რა განსხვავებაა == და === - შორის
    // == ადარებს მხოლოდ მნიშვნელობას მაგრამ არა ტიპს
    // === ადარებს მნიშვნელობასაც და ტიპსაც



