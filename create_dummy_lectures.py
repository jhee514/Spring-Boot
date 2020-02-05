import csv
from faker import Faker
import datetime

def datagenerate(records, headers):
    fake = Faker('ko_KR')
    with open("dummy_lec.csv", 'wt') as csvFile:
        writer = csv.DictWriter(csvFile, fieldnames=headers)
        writer.writeheader()
        for i in range(records):
            writer.writerow({
                    "lecture_id": fake.pyint(min_value=3, max_value=10, step=1),
                    "created_at": fake.date_time(tzinfo=None, end_datetime=None),
                    "updated_at": fake.date_time(tzinfo=None, end_datetime=None),
                    "instructor_id" : fake.pyint(min_value=1, max_value=1, step=1),
                    "lecture_name": fake.name(),
                    "lecture_price": fake.pyint(min_value=10000, max_value=200000, step=10000),
                    "lecture_time": fake.pyint(min_value=1, max_value=9, step=1),

                    })
    
if __name__ == '__main__':
    records = 10
    headers = ["lecture_id", "created_at", "updated_at", "instructor_id", "lecture_name", "lecture_price", "lecture_time"]
    datagenerate(records, headers)
    print("CSV generation complete!")