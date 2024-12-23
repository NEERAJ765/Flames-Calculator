function findRelationship() {
    let str1 = document.getElementById('name1').value.trim();
    let str2 = document.getElementById('name2').value.trim();
    
    if (!str1 || !str2) {
        document.getElementById('result').innerHTML = "Please enter a name in both fields!";
        document.body.className = ''; 
        return;
    }

    let freq1 = new Map();
    let freq2 = new Map();

    function buildFrequencyMap(str, freqMap) {
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }
    }

    buildFrequencyMap(str1, freq1);
    buildFrequencyMap(str2, freq2);

    let remainingCount = 0;

    freq1.forEach((count_in_str1, ch) => {
        let count_in_str2 = freq2.get(ch) || 0;
        if (count_in_str2 > 0) {
            remainingCount += Math.abs(count_in_str1 - count_in_str2);
            freq2.delete(ch);
        } else {
            remainingCount += count_in_str1;
        }
    });

    freq2.forEach(count_in_str2 => {
        remainingCount += count_in_str2;
    });

    if (remainingCount > 18) {
        remainingCount = (remainingCount % 6) + 6;
    }

    let relationship = '';
    let bgColorClass = ''; 
    switch (remainingCount) {
        case 1: relationship = "Sister (Siblings)"; bgColorClass = 'bg-siblings'; break;
        case 2: relationship = "Friendship"; bgColorClass = 'bg-friendship'; break;
        case 3: relationship = "Love"; bgColorClass = 'bg-love'; break;
        case 4: relationship = "Love"; bgColorClass = 'bg-love'; break;
        case 6: relationship = "Love"; bgColorClass = 'bg-love'; break;
        case 5: relationship = "Marriage"; bgColorClass = 'bg-marriage'; break;
        case 7: relationship = "Marriage"; bgColorClass = 'bg-marriage'; break;
        case 9: relationship = "Marriage"; bgColorClass = 'bg-marriage'; break;
        case 8: relationship = "Friendship"; bgColorClass = 'bg-friendship'; break;
        case 12: relationship = "Friendship"; bgColorClass = 'bg-friendship'; break;
        case 14: relationship = "Friendship"; bgColorClass = 'bg-friendship'; break;
        case 10: relationship = "Affection"; bgColorClass = 'bg-affection'; break;
        case 16: relationship = "Affection"; bgColorClass = 'bg-affection'; break;
        case 11: relationship = "Sister (Siblings)"; bgColorClass = 'bg-siblings'; break;
        case 13: relationship = "Sister (Siblings)"; bgColorClass = 'bg-siblings'; break;
        case 15: relationship = "Love"; bgColorClass = 'bg-love'; break;
        case 17: relationship = "Marriage"; bgColorClass = 'bg-marriage'; break;
        case 18: relationship = "Enemies"; bgColorClass = 'bg-enemies'; break;
        default: relationship = "Unknown"; bgColorClass = ''; break;
    }

    document.getElementById('result').innerHTML = `The relation between ${str1} and ${str2} is: ${relationship}`;
    document.body.className = bgColorClass;  
}
