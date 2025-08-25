
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'data', 'demo_profiles.json');
    const fileContent = readFileSync(filePath, 'utf8');
    const profiles = JSON.parse(fileContent);
    
    return new Response(JSON.stringify(profiles), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Error reading demo profiles:', error);
    return new Response(JSON.stringify({ error: 'Failed to load demo profiles' }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
