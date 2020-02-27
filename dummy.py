fake = Faker('ko_KR')
faker = Factory.create()
status = 'created,delivered,returned'.split(',')

def date_between(d1, d2):
    f = '%b%d-%Y'
    return faker.date_time_between_dates(datetime.strptime(d1, f), datetime.strptime(d2, f))

def fakerecord():
    return {'name': fake.name(),
            'instructor_id': fake.random_int(min=0, max=999),
            'location': fake.city(),  # different products
            'price': fake.random_int(min=0, max=100),  # random metro cities
            'date': date_between('fab01-2020', 'mar30-2020'),  # datetime between mar01-2015 to mar15-2015
            'resort': fake.company().
            }

example_dummy_data = pandas.DataFrame([fakerecord() for _ in range(1000)])