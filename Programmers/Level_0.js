// 옹알이(1)
function solution(babbling) {
    let count = 0;
    for (let i of babbling) {
        let gap_count = 0;
        if (i.includes("aya")) {
            i = i.replace("aya", " ");
            gap_count += 1;
        }
        if (i.includes("ye")) {
            i = i.replace("ye", " ");
            gap_count += 1;
        }
        if (i.includes("woo")) {
            i = i.replace("woo", " ");
            gap_count += 1;
        }
        if (i.includes("ma")) {
            i = i.replace("ma", " ");
            gap_count += 1;
        }
        if (i.length === gap_count) {
            count += 1;
        }
    }
    return count;
}