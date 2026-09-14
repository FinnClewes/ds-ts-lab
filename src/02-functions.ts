import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}
console.log(older(friends[0]))

//   -------------------
// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(c: Colleague[], name: string, department: string, email: string): string {
    const extension = highestExtension(colleagues.current).contact.extension + 1;

    const colleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension
        }
    };

    colleagues.current.push(colleague);
    return `${name} has been added to the colleagues list with extension ${extension}.`;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
