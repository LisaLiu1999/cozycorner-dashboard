import { 
  CloudRain, 
  Newspaper, 
  Cat
} from 'lucide-react';

export const availableWidgets = [
  {
    id: 'weather',
    name: 'Weather',
    icon: CloudRain,
    color: 'blue',
    description: 'Current weather conditions'
  },
  {
    id: 'news',
    name: 'News',
    icon: Newspaper,
    color: 'green',
    description: 'Latest news headlines'
  },
  {
    id: 'cat-fact',
    name: 'Cat Fact',
    icon: Cat,
    color: 'purple',
    description: 'Get a random cat fact'
  }
];