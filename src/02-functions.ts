import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

//  -------------------
// Create a function that takes a Friend object and increments their age by 1, returning a string with their name and new age.
function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}
// console.log(older(friends[0]))

//   -------------------
// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
// console.log(highestExtension(colleagues.current));

//   -------------------
// Add a colleague to the colleagues.current array with a new extension number.
function addColleague(c: Colleague[], name: string, department: string, email: string) {
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
    // console.log(`${name} has been added to the colleagues list with extension ${extension}.`);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

//   -------------------
// Sort colleagues by extension number or name length and return an array of EmailContact objects.
function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
// console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));


//  -------------------
// Find friends based on a provided finder function and return an array of their names.
function findFriends(
  friends: Friend[],
  finder: (friend: Friend) => boolean
): string[] {
  const result = friends.filter(finder).map((friend) => friend.name);
  return result;
}

//console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
//console.log(findFriends(friends, (friend) => friend.age < 35));


//  -------------------
// Add an interest to a Friend object and return the updated Friend object.
function addInterest(friend: Friend, interest: string): Friend {
  if (!friend.interests) {
    friend.interests = [];
  }
  friend.interests.push(interest);
  return friend;
}
console.log(`${friends[0].name} has addded to interests ${friends[0].interests?.join(', ')}.`);
console.log(addInterest(friends[0], 'Politics'))

// -------------------
// Sort friends by age
function sort<Friend>(data: Friend[], sorter: (a: Friend, b: Friend) => number): Friend[] {
  return data.sort(sorter);
}
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);