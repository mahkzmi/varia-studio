import { Sprout, ScanEye, Dna, ArrowUpRight, ArrowRight, MoveUpRight, Activity, Layers3, Cpu, Menu, X, Mail, Linkedin, Twitter, Plus, Minus } from "lucide-react";

export function ProductIcon({ type, size = 22 }) {
  const props = { size, strokeWidth: 1.45 };
  if (type === "carbon") return <Sprout {...props} />;
  if (type === "vision") return <ScanEye {...props} />;
  return <Dna {...props} />;
}
export { ArrowUpRight, ArrowRight, MoveUpRight, Activity, Layers3, Cpu, Menu, X, Mail, Linkedin, Twitter, Plus, Minus };
