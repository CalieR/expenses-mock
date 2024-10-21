## Expenses-mock

Set up to add some additional functionality and improvements to the expenses app.

## Getting Started

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the app

## Features

- [x] Make the Table component 'dumb'
- [x] Add sorting to the table
- [] Add filtering to the table
- [] Add search to the table
- [x] Set up tests

## Rationale

I decided to use Typescript - I'm still a beginner but by forcing myself to write it rather than revert to plain JS, I've come up against lots of errors and strange issues, so by being forced to solve them I'm learning more effectively.  I use the Total TypeScript extension which explains the errors and in a way that helps me problem-solve.  I asked a mentor to pair with me on a bit of the code, and I learned some really neat tricks.

I've used React Testing Library before, but not Vitest specifically, so I decided to try it this time round.  It's got some nice features particularly the browser-view but I still need to explore it further.

In a commercial setting I'd have probably headed straight to a library or a tool like TanStack to set up the table, to streamline data manipulation.  This project was originally a 1 hour task so I found an elegant html table solution which is perfect for displaying the data, and is also getting me to think about exactly how sorting and filtering actually work.  I will probably start again with a library once I've built this version out some more.

For the timed test I created only 1 component (the Table) and manipulated the api response inside it, but the point of React components is to keep them as simple and reusable as possible, so the first thing I decided to do was make it dumb and get the expenseService to handle the heavy lifting.  This involved creating several additonal types!