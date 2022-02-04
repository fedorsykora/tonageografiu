import { cities, City, mistakes, index, cm, startTime } from './stores';
export function reset(){
    let cn: City[] = [];
    cities.update(c => {
        while(c.length) cn.push(c.splice(Math.random()*(c.length-1), 1)[0]);
        return cn;
    });
    for(const city of cn) city.reset();
    mistakes.set(0);
    index.set(0);
    cm.set(0);
    startTime.set(new Date());
}