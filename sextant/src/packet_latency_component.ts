// BEGIN: ed8c6549bwf9
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-packet-latency',
  templateUrl: './packet_latency_component.html',
  styleUrls: ['./packet_latency_component.css']
})
export class PacketLatencyComponent implements OnInit {
// END: ed8c6549bwf9
  private chart: Chart;

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementById('myChart');
    if (canvas instanceof HTMLCanvasElement) {
        // Your code here
    }
    const ctx = canvas.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Latency',
          data: [0, 10, 5, 2, 20, 30, 45],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Packet Latency'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Latency (ms)'
            }
          }]
        }
      }
    });
  }
}