export interface FloatingItem {
  id: number;
  x: number;
  y: number;
  scale: number;
  type: 'heart' | 'star' | 'cat' | 'note';
  duration: number;
  delay: number;
}
