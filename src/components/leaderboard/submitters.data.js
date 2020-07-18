const SUBMITTERS = [
    {
        id: 1,
        name: 'mike#2250',
        points: 10
    },
    {
        id: 2,
        name: 'rjfryman#8249',
        points: 20
    },
    {
        id: 3,
        name: 'Slippe#2743',
        points: 5
    }
]
SUBMITTERS.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? +1 : 0)); 
export default SUBMITTERS;