import { driver } from 'neo4j-driver';

export const getNeo4jDriver = () => driver('neo4j://localhost');
