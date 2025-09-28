import { Report } from "./Report";
import { PDFReport } from "./PDFReport";
import { HTMLReport } from "./HTMLReport";

export class ReportFactory {
  static create(type: "pdf" | "html"): Report {
    if (type === "pdf") return new PDFReport();
    if (type === "html") return new HTMLReport();
    throw new Error("Unknown report type: " + String(type));
  }
}
