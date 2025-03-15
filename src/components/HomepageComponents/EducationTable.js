export default function EducationTable({ children, title }) {
  return (
    <div class="flex mb-2">
      <span class="w-fit mr-4 font-bold ">{title}</span>
      <p>{children}</p>
    </div>
  );
}
