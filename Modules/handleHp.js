export function handleHp(hpTotal,hit){
    let percent=0
    percent=(hit*100)/hpTotal

return Math.floor(percent)

}