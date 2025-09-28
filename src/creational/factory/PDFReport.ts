import { Report } from "./Report";

export class PDFReport implements Report {
  generate(): string {
    return "PDF Report content (binary simulated)";
  }
}
