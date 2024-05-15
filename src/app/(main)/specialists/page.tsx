'use client';
import PageWithFilter from '../_components/PageWithFilter/PageWithFilter';
import CatalogSpecialists from './_components/CatalogSpecialists/CatalogSpecialists';

const SpecialistsPage = () => {
  return (
    <PageWithFilter>
      <CatalogSpecialists />
    </PageWithFilter>
  );
};

export default SpecialistsPage;
