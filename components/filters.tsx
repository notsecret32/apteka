import { FilterGroup } from "./filter-group";
import { Button } from "./ui/button";

export const Filters = () => {
  return (
    <div className="flex w-full flex-col bg-white rounded-3xl p-3 h-fit max-xl:hidden px-3">
      <FilterGroup title="Бренд" />
      <FilterGroup title="Форма выпуска" />
      <FilterGroup title="Действующее вещество" />
      <FilterGroup title="Дозировка" />
      <FilterGroup title="Количество в упаковке" />
      <Button className="mt-2" variant="secondary">
        Сбросить все
      </Button>
    </div>
  );
};
