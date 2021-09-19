export default (userId, userFullName, dateCreated, serviceCode, serviceDisplay) => {
  return {
    "resourceType": "Appointment",
    "id": "examplereq",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Brian MRI results discussion</div>"
    },
    "identifier": [
      {
        "system": "http://example.org/sampleappointment-identifier",
        "value": "123"
      }
    ],
    "status": "proposed",
    "serviceCategory": [
      {
        "coding": [
          {
            "system": "http://example.org/service-category",
            "code": serviceCode,
            "display": serviceDisplay
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394814009",
            "display": "General practice"
          }
        ]
      }
    ],
    "appointmentType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
          "code": "WALKIN",
          "display": "A previously unscheduled walk-in visit"
        }
      ]
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "413095006"
          }
        ],
        "text": "Clinical Review"
      }
    ],
    "priority": 5,
    "description": "Discussion on the results of your recent MRI",
    "minutesDuration": 15,
    "slot": [
      {
        "reference": "Slot/example"
      }
    ],
    "created": dateCreated,
    "comment": "Further expand on the results of the MRI and determine the next actions that may be appropriate.",
    "participant": [
      {
        "actor": {
          "reference": `Patient/${userId}`,
          "display": userFullName
        },
        "required": "required",
        "status": "needs-action"
      },
      {
        "type": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code": "ATND"
              }
            ]
          }
        ],
        "required": "required",
        "status": "needs-action"
      },
      {
        "actor": {
          "reference": "Location/1",
          "display": "South Wing, second floor"
        },
        "required": "required",
        "status": "accepted"
      }
    ],
    "requestedPeriod": [
      {
        "start": "2016-06-02",
        "end": "2016-06-09"
      }
    ],
    "meta": {
      "tag": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "HTEST",
          "display": "test health data"
        }
      ]
    }
  }
};