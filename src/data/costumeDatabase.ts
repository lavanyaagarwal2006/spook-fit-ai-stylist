// SpookFit 1000+ Costume Database - Comprehensive Collection
// This database provides consistent baseline matching
// AI will also generate beyond-database recommendations for unlimited variety

export interface Costume {
  name: string;
  source: string;
  genders: string[];
  quickTags: string[];
}

// Import the comprehensive 1000+ costume database
import database from './costumeDatabase-new.js';

const costumeDatabase: Costume[] = database;

export default costumeDatabase;
