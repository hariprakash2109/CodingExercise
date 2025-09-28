import { Report } from "./Report";

export class HTMLReport implements Report {
  generate(): string {
    return "<html><body><h1>HTML Report</h1></body></html>";
  }
}
