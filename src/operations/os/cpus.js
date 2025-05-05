import os from 'node:os';

export const cpus = () => {
  const cpus = os.cpus();
  const cpuInfo = cpus.map((cpu, index) => ({
    Core: index + 1,
    Model: cpu.model,
    'Clock Rate (GHz)': (cpu.speed / 1000).toFixed(1),
  }));

  console.table(cpuInfo);
};
