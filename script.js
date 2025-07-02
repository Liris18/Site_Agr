// Gráfico - Umidade do Solo
const ctxSolo = document.getElementById('graficoUmidadeSolo').getContext('2d');
new Chart(ctxSolo, {
  type: 'bar',
  data: {
    labels: ['Pouca (0-20%)', 'Moderada (20-40%)', 'Ideal (40-60%)', 'Alta (60-80%)'],
    datasets: [{
      label: 'Umidade do Solo (%)',
      data: [15, 35, 55, 75],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true, max: 100 } }
  }
});

// Gráfico - Umidade do Ar
const ctxAr = document.getElementById('graficoUmidadeAr').getContext('2d');
new Chart(ctxAr, {
  type: 'bar',
  data: {
    labels: ['Pouca (0-30%)', 'Moderada (30-50%)', 'Confortável (50-60%)', 'Alta (60-80%)', 'Muito Alta (80-100%)'],
    datasets: [{
      label: 'Umidade do Ar (%)',
      data: [25, 40, 55, 70, 90],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true, max: 100 } }
  }
});

// Gráfico - Temperatura
const ctxTemp = document.getElementById('graficoTemperatura').getContext('2d');
new Chart(ctxTemp, {
  type: 'bar',
  data: {
    labels: [
      'Muito Frio (0-10°C)',
      'Frio (10-18°C)',
      'Ideal (18-27°C)',
      'Quente (27-35°C)',
      'Muito Quente (35-45°C)',
      'Extremo (>45°C)'
    ],
    datasets: [{
      label: 'Temperatura (°C)',
      data: [5, 14, 22, 30, 40, 50],
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 60
      }
    }
  }
});
