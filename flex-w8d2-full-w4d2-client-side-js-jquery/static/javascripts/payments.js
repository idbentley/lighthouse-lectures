function selectCardType(cardType) {
    const allCards = $("input[name='cc_type']");
    const selectedCard = $(`input[value='${cardType}']`);
    // console.log("selected", selectedCard, "All cards", allCards);
    if(cardType === undefined) {
        for (const el of allCards){ 
            el.checked = false;
        }
    } else {
        console.log("selected", selectedCard, "All cards", allCards);
        selectedCard.prop("checked", true);
    }
}

$(() => {
    
    $("input#cc_number").blur((e) => {
        const val = e.target.value;
        if (val) {
            if(val[0] === '3') {
                //amex
                selectCardType('A');
            }else if (val[0] === '4') {
                //visa
                selectCardType('V');
            } else if (val[0] === '5') {
                //master
                selectCardType('M');
            } else {
                selectCardType();
            }
        }
    });
    $("form").submit((e) => {
        
    })
    console.log("document is ready");
});