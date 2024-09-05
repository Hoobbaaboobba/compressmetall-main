import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const TableModel = ({ data, title }: { data: string[][]; title: string }) => {
  return (
    <Table className="mt-6">
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px] text-center text-md font-semibold">
            Марка стали
          </TableHead>
          <TableHead className="text-center text-md font-semibold">
            Заменитель марки стали
          </TableHead>
          <TableHead className="text-center text-md font-semibold">
            Свариваемость стали согласно марок{" "}
          </TableHead>
          <TableHead className="text-center text-md font-semibold">
            Применение стали согласно марок
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-md">{row[0]}</TableCell>
            <TableCell className="font-medium text-md">{row[1]}</TableCell>
            <TableCell className="font-medium text-md">{row[2]}</TableCell>
            <TableCell className="font-medium text-md">{row[3]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableModel;
