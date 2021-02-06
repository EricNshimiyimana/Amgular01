import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Eric Nshimiyimana', 'Success is the best revenge for anything',new Date(2020,3,19)),
    new Goal(2,'Marie Faustine','"The greatest glory in living lies not in never falling, but in rising every time we fall."',new Date(2020,5,2)),
    new Goal(3,'NericJunior','Tell me and I forget. Teach me and I remember. Involve me and I learn."',new Date(2021,1,2)),
    new Goal(4,'Aristotle','"It is during our darkest moments that we must focus to see the light."',new Date(2021,2,1)),
     ];
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit(): void {
  }
}