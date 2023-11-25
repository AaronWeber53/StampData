using DAL.Models;
using Newtonsoft.Json;


namespace DAL.DataAccess
{
    [JsonObject(MemberSerialization.OptOut)]
    public class StampInformationList
    {

        [JsonIgnore]
        private static string FileLocation => @"./json/stamp.json";
        [JsonIgnore]
        private static StampInformationList instance = null;
        [JsonIgnore]
        public static StampInformationList Get
        {
            get
            {
                if (instance == null)
                {
                    instance = CreateInformationList(FileLocation);
                }
                return instance;
            }
        }

        private static StampInformationList CreateInformationList(string fileLocation)
        {
            try
            {
                using (StreamReader reader = new StreamReader(fileLocation))
                {
                    var json = reader.ReadToEnd();
                    return JsonConvert.DeserializeObject<StampInformationList>(json) ?? new StampInformationList();
                }
            }
            catch
            {
                return new StampInformationList();
            }
        }

        private bool Save(bool secondAttempt = false)
        {
            try
            {
                var jsonString = JsonConvert.SerializeObject(this);
                File.WriteAllText(FileLocation, jsonString);
                return true;
            }
            catch(Exception ex)
            {
                if (!secondAttempt)
                {
                    Directory.CreateDirectory(Path.GetDirectoryName(FileLocation));
                    File.Create(FileLocation);
                    return Save();
                }
                throw ex;
            }
            return false;
        }

        public List<Stamp> StampList = new List<Stamp>();

        public void AddStamp(Stamp stamp)
        {
            if (!StampList.Any(s => s.Equals(stamp)))
            {
                int largestIndex = StampList.Count == 0 ? 1: StampList.Max(s => s.ID.Value);
                stamp.ID = ++largestIndex;
                StampList.Add(stamp);
                Save();
            }
        }
        
        public void DeleteStamp(int stampID)
        {
            Stamp stamp = StampList.FirstOrDefault(s => s.ID == stampID);

            if (stamp != null)
            {
                StampList.Remove(stamp);
            }
            Save();
        }
    }

}
