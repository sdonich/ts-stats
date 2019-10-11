import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReports';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HtmlReport } from './reportTargets/HtmlReport';

// varian of implementation without calling a static method of Summary
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
