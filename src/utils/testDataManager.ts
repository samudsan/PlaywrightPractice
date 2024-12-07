import fs from 'fs';

export class TestDataManager {
  static readJSON(filePath: string): any {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
  }
}
