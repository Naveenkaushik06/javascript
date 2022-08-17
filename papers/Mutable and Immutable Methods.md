## Mutable and Immutable Methods
A mutable object is an object whose which can be modified after it is create
while
Immutables are the objects which cannot be changed once the object is created.
A mutable string can be changed but immutable string cannot be changed.
```
let games = {
        musicalChair: "indoor",
        caromPool: "indoor",
        cricket: "outdoor"
    }
-- -- - MUTABLE-- -- -

console.log(games)

games.musicalChair = "outdoor"
console.log(games)

-- -- - IMMUTABLE-- -- -
const { musicalChair, caromPool, cricket } = games
const updateGames = {
    musicalChair: "outdoor"
}
console.log(updateGames)
```
