const asyncHandler = require('express-async-handler')
// description: Get all goals
// route: GET /api/goals
// access: private
const getGoals = asyncHandler(async (req, res) => {
  
  res.status(200).json({message : 'Get goals'})
})

// description: SET goal
// route: POST/api/goal
// access: private
const setGoal = asyncHandler(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text feild')
  }
  res.status(200).json({message : 'Set goals'})
})

// description: UPDATE goal
// route: PUT /api/goals/:id
// access: private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message : `Update goals ${req.params.id}`})
})

// decsription: DELETE goal
// route: DELETE /api/goals/:id
// access: private
const deleteGoal = asyncHandler((req, res) => {
  res.status(200).json({message : `Delete goals ${req.params.id}`})
})


module.exports = {
  getGoals, updateGoal, deleteGoal, setGoal
}