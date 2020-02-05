import csv
from faker import Faker
import datetime

def datagenerate(records, headers):
    fake = Faker('ko_KR')
    with open("dummy_resort.csv", 'wt') as csvFile:
        writer = csv.DictWriter(csvFile, fieldnames=headers)
        writer.writeheader()
        for i in range(records):
            writer.writerow({
                    "resort_id": fake.pyint(min_value=3, max_value=99, step=1),
                    "intro": fake.pystr(min_chars=None, max_chars=20),
                    "lift_image": "https://picsum.photos/200",
                    "location" : fake.city(),
                    "page_link": fake.url(),
                    "region": fake.city(),
                    "rental_image": "https://picsum.photos/200",
                    "resort_image": "https://picsum.photos/200",
                    "resort_name": fake.name(),
                    "slope_image": "https://picsum.photos/200"
                    })
    
if __name__ == '__main__':
    records = 20
    headers = ["resort_id", "intro", "lift_image", "location", "page_link", "region", "rental_image", "resort_image", "resort_name", "slope_image", ]
    datagenerate(records, headers)
    print("CSV generation complete!")