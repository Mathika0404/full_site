const lineCtx = document.getElementById('lineChart');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan','Mar','May','Jul','Sep','Dec'],
    datasets: [
      {
        label: 'Current Year',
        data: [20,35,30,45,40,50],
        borderColor: '#6d28d9',
        tension: 0.4
      },
      {
        label: 'Last Year',
        data: [15,25,28,40,30,35],
        borderColor: '#ef4444',
        tension: 0.4
      }
    ]
  }
});

const barCtx = document.getElementById('barChart');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat'],
    datasets: [
      {
        data: [10,14,12,16,18,20],
        backgroundColor: '#6d28d9'
      }
    ]
  }
});

const salesCtx = document.getElementById('salesChart');

new Chart(salesCtx, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Income',
        data: [180, 90, 135, 115, 120, 145, 170, 200, 170, 230, 210, 180],
        backgroundColor: '#6d28d9',
        borderRadius: 6
      },
      {
        label: 'Cost of Sales',
        data: [120, 45, 80, 150, 170, 100, 180, 220, 180, 210, 220, 200],
        backgroundColor: '#ef4444',
        borderRadius: 6
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    }
  }
});

