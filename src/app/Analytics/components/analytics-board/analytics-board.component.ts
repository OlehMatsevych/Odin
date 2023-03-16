import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analytics-board',
  templateUrl: './analytics-board.component.html',
  styleUrls: ['./analytics-board.component.scss']
})
export class AnalyticsBoardComponent implements OnInit {
  //burndownData
  burndownData = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  idealData = [100, 110, 85, 60, 60, 30, 32, 23, 9, 2];
  
  //velocityData
  storyPoints = [20, 12, 40, 30, 45, 30, 50, 40, 20, 45]
  sprintNumber = ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6', 'Sprint 7', 'Sprint 8', 'Sprint 9', 'Sprint 10']

  //bugsDara
  lowSeverityBugs = [4,3,2,10,9,4,5,4,5,8]
  highSeverityBugs = [1,4,2,0,1,7,6,2,8,8]
  criticalSeverityBugs = [1,2,0,0,1,0,2,0,0,0]

  public chart: any;
  public velocity: any;
  public bugs: any;

  speedData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
    datasets: [
      {
        label: "Burndown",
        data: this.burndownData,
        fill: false,
        borderColor: "#EE6868",
        backgroundColor: "#EE6868",
        lineTension: 0,
      },
      {
        label: "Ideal",
        borderColor: "#6C8893",
        backgroundColor: "#6C8893",
        lineTension: 0,
        borderDash: [5, 5],
        fill: false,
        data: this.idealData
      },
    ]
  };

  velocityData = {
    labels: this.sprintNumber,
    datasets: [
      {
        label: 'Story Points',
        data: this.storyPoints,
        borderColor: "#EE6868",
        backgroundColor: "#EE6868",
      },
    ]
  };

  bugsData = {
    labels: this.sprintNumber,
    datasets: [
      {
        label: 'Low',
        data: this.lowSeverityBugs,
        borderColor: "#000000",
        backgroundColor: "#64db46",
      },
      {
        label: 'High',
        data: this.highSeverityBugs,
        borderColor: "#000000",
        backgroundColor: "#e3e637",
      },
      {
        label: 'Critical',
        data: this.criticalSeverityBugs,
        borderColor: "#000000",
        backgroundColor: "#EE6868",
      },
    ]
  }

  ngOnInit(): void {
    this.drawBurnDown();
    this.drawVelocity();
    this.drawBugs();
  }

  drawBurnDown() {
    var lineChart = new Chart("burndown", {
      type: 'line',
      data: this.speedData,
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'Burndown Chart'
          }
        },
        scales: {
          y: {
            position: "left",
            title: {
              display: true,
              text: "Work Remaining",
            },
            min: 0,
            max: Math.round(this.burndownData[0] * 1.1),
            ticks: {
              stepSize: 50
            }
          }
        }
      }
    });
  }

  drawVelocity() {
    var lineChart = new Chart("velocity", {
      type: 'bar',
      data: this.velocityData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sprints velocity'
          }
        }
      },
    });
  }

  drawBugs(){
    var lineChart = new Chart("bugs", {
      type: 'bar',
      data: this.bugsData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Bugs Severity'
          }
        }
      },
    });
  }

}
