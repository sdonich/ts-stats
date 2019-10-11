import { MatchData } from "./MatchData";
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    );
  }

  analyzer: Analyzer;
  outputTarget: OutputTarget;

  constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
